import Home_V1 from "./(home)/home-page/page";
import Wrapper from "./layout-wrapper/wrapper";

export const metadata = {
  title: "Sharikana",
};

export default function MainRoot() {
  return (
    <Wrapper>
      <Home_V1 />
    </Wrapper>
  );
}
