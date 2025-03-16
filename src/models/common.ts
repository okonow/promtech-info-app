// src/models/common.ts
import { Model } from '@sequelize/core';
import type { ModelStatic } from '@sequelize/core';

export interface ModelStaticWithAssociations<T extends Model = Model> 
  extends ModelStatic<T> {
  associate: (models: Record<string, ModelStaticWithAssociations>) => void;
}