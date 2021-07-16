export type AnimatedLoaderProps = {
  /**
   * Controls the visibility of the loader.
   * @defaultValue false
   */
  visible?: boolean

  /**
   * Changes the color of the overlay.
   */
  overlayColor?: string

  /**
   * The source of animation. Can be referenced as a local asset by a string, or remotely with an object with a uri property, or it can be an actual JS object of an animation, obtained (for example) with something like  `require('../path/to/animation.json')`.
   */
  source: object | string | { uri: string }

  /**
   * The speed the animation will progress.
   * @defaultValue 1
   */
  speed?: number

  /**
   * A boolean flag indicating whether or not the animation should loop.
   * @defaultValue true
   */
  loop?: boolean

  /**
   * Changes animation on show and hide loader's view.
   */
  animationType?: any

  /**
   * The style to be applied to the Lottie.
   */
  animationStyle?: import('react-native').StyleProp<
    import('react-native').ViewStyle
  >
}

export default function AnimatedLoader(
  props: AnimatedLoaderProps
): JSX.Element
