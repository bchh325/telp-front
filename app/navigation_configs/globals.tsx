import { AuthStackParamList, MainStackParamList } from "./types";

declare global {
    namespace ReactNavigation {
      interface RootParamList extends MainStackParamList {}
      interface RootParamList extends AuthStackParamList {}
    }
  }