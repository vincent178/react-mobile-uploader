import {schema} from 'normalizr';

export const TopicEntity = new schema.Entity('topics', {}, {
  idAttribute: 'uuid'
});

export const PhotoEntity = new schema.Entity('photos', {}, {
  idAttribute: 'uuid'
});