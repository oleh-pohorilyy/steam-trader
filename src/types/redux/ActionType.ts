import actionCreators from 'src/redux/action-creators'

type PropertiesTypes<T> = T extends {[key: string]: infer U} ? U : never
type ActionCreatorsTypes<T extends {[key: string]: (...args: any[]) => any}> = ReturnType<PropertiesTypes<T>>
export type ActionType = ActionCreatorsTypes<typeof actionCreators>