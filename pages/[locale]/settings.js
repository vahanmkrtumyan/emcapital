import React, {useReducer, useState} from "react";
import Layout from '../../components/Layout';
import Link from "next/link";
import { LocalizationContext } from "../../components/Localization";
import {useRouter} from "next/router";


const Settings = () => {



  const { t } = React.useContext(LocalizationContext);
  const router = useRouter();
  const  { locale } = router.query;
  return (
      <Layout cls={'invert-header'}>
        <section className='secondary-banner'>
          <div className="container">
            <div className="secondary-banner-content">
              <h3>{t('settings')}</h3>
              <ul className="breadcrumbs">
                <li>
                  <Link href={`/${locale}`}><a>{t('main')}</a></Link>
                </li>
                <li>
                  <Link href={`/${locale}/settings`}><a>{t('settings')}</a></Link>
                </li>
              </ul>
            </div>

          </div>
        </section>
        <section className='settings-section'>
          <div className="container">
            <h3>Կանոններ</h3>
            <ul>
              <li>
                <a href="#">ՀՀ օրենքը Արժեթղթերի շուկայի մասին</a>
              </li>
              <li>
                <a href="#">ՀՀ օրենքը Արժեթղթերի շուկայի մասին</a>
              </li>
              <li>
                <a href="#">ՀՀ օրենքը Արժեթղթերի շուկայի մասին</a>
              </li>
              <li>
                <a href="#">ՀՀ օրենքը Արժեթղթերի շուկայի մասին</a>
              </li>
              <li>
                <a href="#">ՀՀ օրենքը Արժեթղթերի շուկայի մասին</a>
              </li>
              <li>
                <a href="#">ՀՀ օրենքը Արժեթղթերի շուկայի մասին</a>
              </li>
            </ul>
          </div>
        </section>
      </Layout>
  );
};

export default Settings;
