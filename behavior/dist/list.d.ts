export interface IList<TViewModel> {
    list: TViewModel[];
    read(): any;
}
export interface IListFromModel<TModel, TViewModel> extends IList<TViewModel> {
    rawList: TModel[];
    parseData(): TViewModel[];
}
export interface IListWithCRUD<TViewModel> extends IList<TViewModel> {
    create?(): any;
    update?(model: TViewModel): any;
    remove?(model: TViewModel): any;
}
export interface IListFromModelWithCRUD<TModel, TViewModel> extends IListFromModel<TModel, TViewModel>, IListWithCRUD<TViewModel> {
}
export interface ISelectableList<TViewModel> extends IList<TViewModel> {
    selectedItems: TViewModel[];
    toggleItem(item: TViewModel): any;
}
