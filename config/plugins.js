module.exports = ({ env }) => ({
  "users-permissions": {
    config: {
      jwtSecret: env("JWT_SECRET", "Ig1HNbz5Z9M+SUHTr/ltug=="),
    },
  },
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME", "leewardslope"),
        api_key: env("CLOUDINARY_KEY", "783694461985968"),
        api_secret: env("CLOUDINARY_SECRET", "S0-Evp6iezzQU8jaLjqhYcqpXJg"),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  graphql: {
    config: {
      endpoint: "/graphql",
      shadowCRUD: true,
      playgroundAlways: false,
      apolloServer: {
        tracing: false,
        introspection: true,
      },
    },
  },

  email: {
    config: {
      provider: "sendgrid",
      providerOptions: {
        apiKey: env(
          "SENDGRID_API_KEY",
          "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"
        ),
      },
      settings: {
        defaultFrom: "akhil@contentql.io",
        defaultReplyTo: "tjezba@gmail.com",
      },
    },
  },

  // upload: {
  //   config: {
  //     providerOptions: {
  //       localServer: {
  //         maxage: 300000,
  //       },
  //     },
  //   },
  // },
  // slugify: {
  //   enabled: true,
  //   config: {
  //     contentTypes: {
  //       blog: {
  //         field: "slug",
  //         references: "title",
  //       },
  //     },
  //   },
  // },
});
