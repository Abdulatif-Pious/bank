export const styles = {
  paddingX: "px-4 md:px-10",
  paddingY: "py-4 md:py-10",
  padding: "px-4 md:px-10 py-4 md:py-10",
  
  marginX: "mx-4 md:mx-10",
  marginY: "my-4 md:my-10",
  margin: "mx-4 md:mx-10 my-4 md:my-10",
  
  heading2 : "text-center tracking-[0.04rem] font-extrabold text-white text-[24px] md:text-[32px] 2xl:text-[48px] leading-[40px] md:leading-[50px] 2xl:leading-[60px]",
  heading3: "tracking-[0.02rem] font-semibold text-white text-[20px] md:text-[26px] 2xl:text-[32px]",
  heading4: "tracking-[0.01rem] font-medium text-white text-[18px] md:text-[24px] 2xl:text-[30px]",
  paragraph: "text-secondary-color text-base md:text-[18px] 2xl:[24px]",

  flexCenter: 'flex items-center justify-center',
  flexStart: 'flex items-start justify-center',
  
}

export const  layout = {
  section: `flex flex-col xl:flex-row gap-10 ${styles.paddingY}`,
  sectionReverse: `flex flex-col-reverse xl:flex-row gap-16 ${styles.paddingY}`, 

  sectionImg: `flex-1  ${styles.flexCenter}`,

}
