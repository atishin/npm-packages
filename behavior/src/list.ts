export interface IList<TViewModel> {
    list: TViewModel[];
    read();
}

export interface IListFromModel<TModel, TViewModel> extends IList<TViewModel>{
    rawList: TModel[];
    parseData(): TViewModel[];
}

export interface IListWithCRUD<TViewModel> extends IList<TViewModel> {
    create?();
    update?(model: TViewModel);
    remove?(model: TViewModel);
}

export interface IListFromModelWithCRUD<TModel, TViewModel> extends IListFromModel<TModel, TViewModel>, IListWithCRUD<TViewModel> {}

export interface ISelectableList<TViewModel> extends IList<TViewModel> {
    selectedItems: TViewModel[];
    toggleItem(item: TViewModel);
}