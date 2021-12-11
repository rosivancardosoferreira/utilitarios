export interface iNavigation {
  navigation : {
    screen?: string,
    navigate: (router: string, params?: object) => void,
    replace: (router: string) => void,
    goBack: () => void,
    reset: (router: string) => void,
    popToTop: () => void,
  },
  route : {
    params : any
  }
}