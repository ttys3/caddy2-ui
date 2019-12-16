
export const AutomaticHTTPS = {
  uri: 'http://caddy2-config/app/http/server/automatic_https',
  schema: {
    type: 'object',
    properties: {
      disable: {
        type: 'boolean',
      },
      disable_redirects: {
        type: 'boolean',
      },
      skip: {
        type: 'array',
        items: { type: 'string' },
      },
      skip_certificates: {
        type: 'array',
        items: { type: 'string' },
      },
      ignore_loaded_certificates: {
        type: 'boolean',
      },
    }
  }
}