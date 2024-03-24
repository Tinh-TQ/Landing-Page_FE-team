import { imageState } from "../constants/config/ImageCard"

export const returnValueImageState = (state: string) : string | undefined => {
  return imageState.get(state) || imageState.get('default') ;
}