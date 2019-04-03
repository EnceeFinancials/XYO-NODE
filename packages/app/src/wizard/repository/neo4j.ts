import { Wizard } from "../base"
import { IArchivistRepositoryConfig } from '@xyo-network/archivist-repository'

export class Neo4jRepositoryWizard extends Wizard {
  public async start(): Promise<IArchivistRepositoryConfig> {
    const { host, user, password, database, port } = await this.prompt([
      {
        type: 'input',
        name: 'host',
        message: 'Enter the `host` value for your MySQL database',
        initial: '127.0.0.1',
      },
      {
        type: 'input',
        name: 'user',
        message: 'Enter the `user` value for your MySQL database',
        initial: 'admin',
      },
      {
        type: 'input',
        name: 'password',
        message: 'Enter the `password` value for your MySQL database',
        initial: 'password',
      },
      {
        type: 'input',
        name: 'database',
        message: 'Enter the `database` value for your MySQL database',
        initial: 'Xyo',
      },
      {
        type: 'input',
        name: 'port',
        message: 'Enter the `port` value for your MySQL database',
        initial: '3306',
      },
    ])

    return {
      name: "Neo4j",
      platform: "neo4j",
    }
  }
}
