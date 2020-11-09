'use strict';
const bcrypt = require('bcrypt');

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg:'Please enter your firstname'
        }
      }
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg:'Please enter your firstname'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg:'Please enter your firstname'
        }
      }
    }
  },{
    sequelize,
    modelName: 'User',
  });
  // Hash user password before saving into database
  User.beforeCreate(function(user, options) {
    // Return bcrypt hash function
    return bcrypt.hash(user.password, 10)
      .then(hash => {
        // Hash password
        user.password = hash;
      })
      .catch(err => {
        throw new Error();
      });
  });

  // Compare login password with user's password
  User.prototype.isValidPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
  }

  // Return a shorthand of the User's properties/values
  User.prototype.short = function() {
    return {
        firstname: this.firstname,
        lastname:this.lastname,
        email:this.email} ;
    }
  // Create database if does not exist
  //User.sequelize.sync({ force: true });

  return User;
};