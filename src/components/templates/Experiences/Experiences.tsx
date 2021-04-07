import React, { FunctionComponent, useEffect, useState } from 'react';
import { DefaultLayout } from '../DefaultLayout';
import { ExperiencesList } from '../../organisms/ExperiencesList';
import styled from 'styled-components';
import SectionTitle from '../../shared/SectionTitle';

interface Props {
  experiences: any[];
  location: Location;
}

export const Experiences: FunctionComponent<Props> = ({ experiences, location }) => {
  return (
    <DefaultLayout location={location}>
      <Wrapper>
        <SectionTitle>Experiences</SectionTitle>
        <ExperiencesList experiences={experiences} />
      </Wrapper>
    </DefaultLayout>
  );
};

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 1rem 1rem 0 1rem;
  max-width: 50rem;
`;
