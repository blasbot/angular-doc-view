import { createAction, props } from '@ngrx/store';

export const getDocuments = createAction(
    '[Documents] Get Documents'
);

export const getDocumentsSuccess = createAction(
    '[Documents] Get Documents Success',
    props<{ response: any }>()
);

export const getDocumentsFailure = createAction(
    '[Documents] Get Documents Failure',
    props<{ error: any }>()
);

export const updateDocument = createAction(
  '[Documents] Update Documents'
);

export const updateDocumentSuccess = createAction(
  '[Documents] Update Documents Success',
  props<{ response: any }>()
);

export const updateDocumentFailure = createAction(
  '[Documents] Update Documents Failure',
  props<{ error: any }>()
);

export const addDescriptionToPage = createAction(
  '[Documents] Add Description To Page',
  props<{ id:string; page: number; description: any }>()
);

export const addDescriptionToPageSuccess = createAction(
  '[Documents] Add Description To Page Success',
  props<{ response: any }>()
);

export const addDescriptionToPageFailure = createAction(
  '[Documents] Add Description To Page Failure',
  props<{ error: any }>()
);

export const addImageToPage = createAction(
  '[Documents] Add Image To Page',
  props<{ id:string; page: number; image: any }>()
);

export const addImageToPageSuccess = createAction(
  '[Documents] Add Image To Page Success',
  props<{ response: any }>()
);

export const addImageToPageFailure = createAction(
  '[Documents] Add Image To Page Failure',
  props<{ error: any }>()
);

export const removeDescription = createAction(
  '[Documents] Remove Description',
  props<{ id:string; page: number; descriptionIndex: number }>()
);

export const removeDescriptionSuccess = createAction(
  '[Documents] Remove Description Success',
  props<{ id:string; page: number; descriptionIndex: number }>()
);

export const removeDescriptionFailure = createAction(
  '[Documents] Remove Description Failure',
  props<{ error: any }>()
);

export const removeImage = createAction(
  '[Documents] Remove Image Page',
  props<{ id:string; page: number; imageIndex: number }>()
);

export const removeImageSuccess = createAction(
  '[Documents] Remove Image Success',
  props<{ id:string; page: number; imageIndex: number }>()
);

export const removeImageFailure = createAction(
  '[Documents] Remove Image Failure',
  props<{ error: any }>()
);