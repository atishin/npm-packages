import { ValidatorFn, AsyncValidatorFn, FormGroup } from '@angular/forms';
export interface IForm<TModel> {
    vm: TModel;
    submit(): any;
    clear(): any;
}
export declare type ValueControlDeclaration = [any];
export declare type ValueWithValidatorsControlDeclaration = [any, ValidatorFn | ValidatorFn[]];
export declare type FullControlDeclaration = [any, ValidatorFn | ValidatorFn[], AsyncValidatorFn | AsyncValidatorFn[]];
export declare type IFormGroupControls<T> = {
    [P in keyof T]: ValueControlDeclaration | ValueWithValidatorsControlDeclaration | FullControlDeclaration;
};
export interface IReactiveForm<TModel> extends IForm<TModel> {
    form: FormGroup;
    buildForm(): any;
}
