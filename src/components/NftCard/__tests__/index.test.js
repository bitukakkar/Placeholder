import React from 'react'
import createSetup from '../../../Utils/setup'
import Nftcard from '../../NftCard'
import '@testing-library/jest-dom/extend-expect';



describe('<Nftcard />', () => {
  let setup
  let props;

  beforeEach(() => {
    props = {
      name: "Test",
      src: "icon",
    };

    setup = createSetup({
      component: Nftcard,
      props
    })
  })

  afterEach(jest.resetAllMocks)

  test('When it renders Then it should not crash', () => {
    const { container } = setup()
    expect(container).toBeTruthy()
  })
  test("Check Nft name and Nft image render correctly", () => {
    const { getByTestId } = setup();
    const nftName = getByTestId("nft_name");
    const nftImage = getByTestId("nft_image");

    expect(nftName).toHaveTextContent("Test");
    expect(nftImage).toHaveAttribute("src", expect.stringContaining("icon"));
  });
})
