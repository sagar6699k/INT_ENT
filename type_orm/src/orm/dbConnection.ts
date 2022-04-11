import {DataSource } from 'typeorm';
import "reflect-metadata"; 

import config from './orm_configs';

export const dbCreateConnection = new DataSource(config);