import type { APIRoute } from "astro";

const getSecurityTxt = () => `# Security Policy for Nubesti
# https://securitytxt.org/

Contact: mailto:security@nubesti.com
Contact: https://nubesti.com/contact/
Expires: 2026-12-31T23:59:59.000Z
Encryption: https://nubesti.com/pgp-key.txt
Acknowledgments: https://nubesti.com/security/acknowledgments
Policy: https://nubesti.com/security/policy
Hiring: https://nubesti.com/careers/security

# Preferred Languages
Preferred-Languages: en, es, fr

# Canonical URL
Canonical: https://nubesti.com/.well-known/security.txt
`;

export const GET: APIRoute = () => {
  return new Response(getSecurityTxt(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
