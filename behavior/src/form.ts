import { ValidatorFn, AsyncValidatorFn, FormGroup } from '@angular/forms';

export interface IForm<TModel> {
    vm: TModel;
    submit();
    clear();
}

export type ValueControlDeclaration = [any];
export type ValueWithValidatorsControlDeclaration = [any, ValidatorFn | ValidatorFn[]];
export type FullControlDeclaration  = [any, ValidatorFn | ValidatorFn[], AsyncValidatorFn | AsyncValidatorFn[]];
export type IFormGroupControls<T> = {
    [P in keyof T]: ValueControlDeclaration | ValueWithValidatorsControlDeclaration | FullControlDeclaration;
};


export interface IReactiveForm<TModel> extends IForm<TModel> {
    form: FormGroup;
    buildForm();
}