![CI/CD](https://github.com/kelaltech/nyala-motors/workflows/CI/CD/badge.svg)

# nyala-motors

Official website of [Nyala Motors S.C.](https://www.nyalamotors.com/)

# Installation

```
yarn install
```

# Setup

1. Install [PostgreSQL v10.0+](https://www.postgresql.org/download/)
2. Create a database in Postgres
3. Configure your environment with values for the [database variables](strapi/config/environments/development/). _(`.env` works!)_

# Development

To start both strapi and www in parallel:

```
yarn start
```

Or, in separate terminals:

```
yarn strapi

# and

yarn www
```

Enjoy!

---

---

© 2020 [kelal tech plc](https://www.kelaltech.com/).
