import { DataTypes, Model } from 'sequelize';
import sequelize from '../db/connection';

interface PersonaAttributes {
  id: number;
  nombre: string;
  apellido: string;
  direccion: string;
  fechaNacimiento: string;
  estadoCivil: string;
  email: string;
  telefono: string;
  profesion: string;
  rol: string;
}

class Persona extends Model<PersonaAttributes> implements PersonaAttributes {
  public id!: number;
  public nombre!: string;
  public apellido!: string;
  public direccion!: string;
  public fechaNacimiento!: string;
  public estadoCivil!: string;
  public email!: string;
  public telefono!: string;
  public profesion!: string;
  public rol!: string;
}

Persona.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
    },
    apellido: {
      type: DataTypes.STRING,
    },
    direccion: {
      type: DataTypes.STRING,
    },
    fechaNacimiento: {
      type: DataTypes.STRING,
    },
    estadoCivil: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    telefono: {
      type: DataTypes.STRING,
    },
    profesion: {
      type: DataTypes.STRING,
    },
    rol: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: 'Persona',
  }
);

export default Persona;