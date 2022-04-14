import { useTranslation } from 'next-i18next';

import WhatsAppIcon from 'public/assets/img/icon/whatsapp.svg';
import LinkedInIcon from 'public/assets/img/icon/linkedin.svg';
import GitHubIcon from 'public/assets/img/icon/github.svg';
import Logo from 'public/assets/img/logo.svg';

import { SocialMedia } from 'types/Api';

import * as S from './styles';

export type HeaderProps = {
  forceBorder?: boolean;
  data: SocialMedia[];
};

const Header = ({ forceBorder, data }: HeaderProps) => {
  const { t } = useTranslation(['header', 'common']);

  const linkedinData = data.find((item) => item.slug === 'linkedin');
  const githubData = data.find((item) => item.slug === 'github');
  const whatsappData = data.find((item) => item.slug === 'whatsapp');

  return (
    <S.Container forceBorder={forceBorder}>
      <S.Title>{t('name', { ns: 'common' })}</S.Title>
      <S.Content>
        <Logo id="logo" aria-label={t('logo-alt')} />
        <S.Menu aria-label={t('social-media')}>
          {!!linkedinData && (
            <S.MenuItem aria-label="Linked-in">
              <S.MenuItemIconWrapper>
                <LinkedInIcon className="icon" aria-hidden />
                <S.MenuItemText
                  href={linkedinData?.url}
                  target="_blank"
                  title="Linked-in"
                >
                  {linkedinData?.display}
                </S.MenuItemText>
              </S.MenuItemIconWrapper>
            </S.MenuItem>
          )}
          {!!githubData && (
            <S.MenuItem aria-label="Github">
              <S.MenuItemIconWrapper>
                <GitHubIcon className="icon" aria-hidden />
                <S.MenuItemText
                  href={githubData.url}
                  target="_blank"
                  title="GitHub"
                >
                  {githubData.display}
                </S.MenuItemText>
              </S.MenuItemIconWrapper>
            </S.MenuItem>
          )}
          {!!whatsappData && (
            <S.MenuItem aria-label="WhatsApp">
              <S.MenuItemIconWrapper>
                <WhatsAppIcon className="icon" aria-hidden />
                <S.MenuItemText
                  href={whatsappData.url}
                  target="_blank"
                  title="WhatsApp"
                >
                  {whatsappData.display}
                </S.MenuItemText>
              </S.MenuItemIconWrapper>
            </S.MenuItem>
          )}
        </S.Menu>
      </S.Content>
    </S.Container>
  );
};

export default Header;
