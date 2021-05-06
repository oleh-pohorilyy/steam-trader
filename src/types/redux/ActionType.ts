import actions from '../../redux/actions/All'

type PropertiesTypes<T> = T extends {[key: string]: infer U} ? U : never
type ActionsTypes<T extends {[key: string]: (...args: any[]) => any}> = ReturnType<PropertiesTypes<T>>
export type ActionType = ActionsTypes<typeof actions>