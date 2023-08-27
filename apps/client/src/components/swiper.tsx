import { ReactNode, useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";
import type { SwiperOptions } from "swiper/types";
import { SwiperRef } from "../swiper";

export interface ISwiper extends SwiperOptions {
  children: ReactNode;
}

export function Swiper({ children, ...rest }: ISwiper) {
  const swiperRef = useRef<SwiperRef>(null);

  useEffect(() => {
    // Register Swiper web component
    register();

    // pass component props to parameters
    const params = {
      ...rest,
    };

    if (swiperRef.current) {
      // Assign it to swiper element
      Object.assign(swiperRef.current, params);
    }

    // initialize swiper
    swiperRef.current?.initialize();
  }, []);

  return (
    <swiper-container init={false} ref={swiperRef}>
      {children}
    </swiper-container>
  );
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: Unreachable code error
export function SwiperSlide({ children, ...rest }) {
  return <swiper-slide {...rest}>{children}</swiper-slide>;
}
