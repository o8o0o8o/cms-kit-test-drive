import { LINK_FRAGMENT } from "@/lib/api/fragments";

export const FOOTER_FRAGMENT = `
  ...,
  links[] {
    ${LINK_FRAGMENT}
  }
`;
