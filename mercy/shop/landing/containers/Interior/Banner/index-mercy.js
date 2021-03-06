import React, { Fragment, useState, useEffect } from 'react';
import Link from 'next/link';
import Fade from 'react-reveal/Fade';
import { Icon } from 'react-icons-kit';
import { iosEmailOutline } from 'react-icons-kit/ionicons/iosEmailOutline';
import Heading from 'common/src/components/Heading';
import Text from 'common/src/components/Text';
import Image from 'common/src/components/Image';
import Button from 'common/src/components/Button';
import Input from 'common/src/components/Input';
import GlideCarousel from 'common/src/components/GlideCarousel';
import GlideSlide from 'common/src/components/GlideCarousel/glideSlide';
import { CircleLoader } from '../interior.style';
import BannerWrapper, {
  Container,
  ContentArea,
  HighlightedText,
  FormWrapper,
  ButtonGroup,
  CarouselArea,
} from './banner.style';

// import { bannerData } from 'common/src/data/Interior';

/* ------------------------------------ */
// Banner section data
/* ------------------------------------ */
import slide1 from 'common/src/assets/image/interior/slider/slide-1.png';
import slide2 from 'common/src/assets/image/interior/slider/slide-2.png';
import slide3 from 'common/src/assets/image/interior/slider/slide-3.png';

const bannerData = {
  discount: '25%',
  discountLabel: 'DISCOUNT ON YOUR FIRST DESIGN',
  title: 'Social commerce for Everyone',
  text: 'Create, Collect, Connect, and Share with Mercy Content Builder.',
  carousel: [
    {
      id: 1,
      thumb_url: slide1,
      title: 'A lazy afternoon',
      link: '#1',
    },
    {
      id: 2,
      thumb_url: slide2,
      title: 'Snowboard styles',
      link: '#1',
    },
    {
      id: 3,
      thumb_url: slide3,
      title: 'Interior rocks',
      link: '#1',
    },
  ],
};
const Banner = () => {
  const { discount, discountLabel, title, text, carousel } = bannerData;
  const glideOptions = {
    type: 'carousel',
    perView: 3,
    gap: 20,
    breakpoints: {
      1200: {
        perView: 2,
      },
      667: {
        perView: 2,
      },
      480: {
        perView: 1,
      },
    },
  };

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
  }, []);

  const [state, setState] = useState({ email: '', valid: '' });
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const handleOnChange = e => {
    let value = '';
    if (e.target.value.match(emailRegex)) {
      if (e.target.value.length > 0) {
        value = e.target.value;
        setState({ ...state, email: value, valid: 'valid' });
      }
    } else {
      if (e.target.value.length > 0) {
        setState({ ...state, valid: 'invalid' });
      } else {
        setState({ ...state, valid: '' });
      }
    }
  };

  const handleSubscriptionForm = e => {
    e.preventDefault();
    if (state.email.match(emailRegex)) {
      console.log(state.email);
      setState({ email: '', valid: '' });
    }
  };

  return (
    <BannerWrapper>
      <Container>
        <ContentArea>
          <Fade bottom delay={30}>
            {/*<HighlightedText>
              <strong>{discount}</strong> {discountLabel}
            </HighlightedText>*/}
            <Heading as="h1" content={title} />
            <Text content={text} />
            <FormWrapper onSubmit={handleSubscriptionForm}>
              {/*<Input
                className={state.valid}
                type="email"
                placeholder="Enter email address"
                icon={<Icon icon={iosEmailOutline} />}
                iconPosition="left"
                required={true}
                onChange={handleOnChange}
                aria-label="email"
              />*/}
              <ButtonGroup>
                <Button type="submit" colors="primaryWithBg" title="Get Started" />
                <a href="/admin">
                  <Button
                    title="Login"
                    variant="textButton"
                    icon={<i className="flaticon-next" />}
                  />
                </a>
              </ButtonGroup>
            </FormWrapper>
          </Fade>
        </ContentArea>
        {/* End of content section */}

        <CarouselArea>
          {loading ? (
            <GlideCarousel
              carouselSelector="interior_carousel"
              options={glideOptions}
              nextButton={<span className="next_arrow" />}
              prevButton={<span className="prev_arrow" />}
            >
              <Fragment>
                {carousel.map(item => (
                  <GlideSlide key={`carousel_key${item.id}`}>
                    <Link href={item.link}>
                      <a className="item_wrapper">
                        <Image src={item.thumb_url} alt={item.title} />
                        <Heading as="h4" content={item.title} />
                      </a>
                    </Link>
                  </GlideSlide>
                ))}
              </Fragment>
            </GlideCarousel>
          ) : (
            <CircleLoader>
              <div className="circle"></div>
              <div className="circle"></div>
            </CircleLoader>
          )}
        </CarouselArea>
        {/* End of carousel section */}
      </Container>
    </BannerWrapper>
  );
};

export default Banner;
