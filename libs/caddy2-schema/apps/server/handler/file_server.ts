
export const FileServer = {
  uri: 'http://caddy2-config/app/http/server/handler/file_server',
  fileMatch: ['caddy2-edit:/config/app/http/server/handler/file_server/config.json'],
  schema: {
    type: 'object',
    properties: {
      handler: { enum: ['file_server'] },
      root: { type: 'string' },
      hide: {
        type: 'array',
        items: { type: 'string' },
      },
      index_names: {
        type: 'array',
        items: { type: 'string' },
      },
      browse: {
        type: 'object',
        properties: {
          template_file: { type: 'string' },
        },
      },
      canonical_uris: { type: 'boolean' },
      pass_thru: { type: 'boolean' },
    }
  }
}
