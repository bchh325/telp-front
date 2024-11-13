import { MainStackParamList } from "./types";

declare global {
    namespace ReactNavigation {
      interface RootParamList extends MainStackParamList {}
    }
  }