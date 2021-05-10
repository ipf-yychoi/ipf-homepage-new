import { graphql } from 'gatsby';
import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import Header from '../components/Header';
import HelmetComponent from '../components/HelmetComponent';
import MissionSection from '../sections/About/MissionSection';
import CoreValuesSection from '../sections/About/CoreValuesSection';
import HistorySection from '../sections/About/HistorySection';
import Footer from '../containers/Footer';

export default function About() {
  const { t } = useTranslation();

  return (
    <>
      <HelmetComponent pageTitle="About" pageLink="/about" />
      <div style={{ width: '100%', height: '100%' }}>
        <Header>{t('TEXT-02')}</Header>
        <MissionSection />
        <CoreValuesSection />
        <HistorySection />
        <Footer />
      </div>
    </>
  );
}

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
