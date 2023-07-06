declare module '*.svg' {
  type SvgProps = React.ComponentPropsWithoutRef<'svg'>;
  export const ReactComponent: React.ComponentType<SvgProps>;
  const url: string;
  export default url;
}
