import { navigate } from "vike/client/router";

export interface LinkProps {
  href: string;
  children?: React.ReactNode | undefined;
}

export function Link(props: LinkProps) {
  const onClick = (evt: React.MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    navigate(props.href);
  };
  return <a {...props} onClick={onClick} />;
}
