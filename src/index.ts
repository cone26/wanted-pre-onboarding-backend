import { AppDataSource } from './data-source';
import { Company } from './entity/Company';
import { User } from './entity/User';

AppDataSource.initialize()
  .then(async () => {
    const user = new User();
    user.user_name = 'siwon';
    await AppDataSource.manager.save(user);
    const users = await AppDataSource.manager.find(User);
    console.log('Loaded users: ', users);

    const company = new Company();
    company.company_name = 'test';
    await AppDataSource.manager.save(company);
    const companies = await AppDataSource.manager.find(Company);
    console.log(`Loaded companies: ${companies}`);
  })
  .catch((error) => console.log(error));
