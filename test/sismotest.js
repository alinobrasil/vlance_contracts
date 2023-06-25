const { expect } = require("chai");
const hre = require("hardhat");


describe("SismoConnect", function () {

  describe("Deployment", function () {
    let contract;

    it("Should deploy successfully", async function () {
      contract = await hre.ethers.deployContract("Vlance", []);
      await contract.waitForDeployment();

      console.log(
        `Deployed to ${contract.target} on network ${hre.network.name}`
      );
    });

    it("try sismoconnect", async function () {
      const responseText = "0x0000000000000000000000000000000000000000000000000000000000000020c8296b55ab40894b58d094e76248898b00000000000000000000000000000000b8e2054f8a912367e38a22ce773328ff000000000000000000000000000000007369736d6f2d636f6e6e6563742d76312e31000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000e00000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000030000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000052000000000000000000000000000000000000000000000000000000000000009e000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000001a068796472612d73332e310000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001c000000000000000000000000000000000000000000000000000000000000004a0000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000011c2fbd969dddf9697c13e25c8f5f4ae9b9cb1b7e07bf216efef7542a075551e800000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002c02779f407cc3d39e99046014c329125ae1865f539ad201d79b8cf36d581d2cb33265e266db1fce445ec1de4aa65fc2e290580b48400afced217a20df403be6ba6250c2d4be190ca51902573a12e3eb8f6e831b15e5c491605cf43ea5804723872178617f3ebf7be714068eef1b3619dceea4ca81428c1c36854aa6187a174774612b2912996dfb165d88b7633d8dcda3bd993a08eee9852a35bd1cffa650d21731f985540846e28195d9ccf02dc2ef2ca996b01b9e789855b921d6be4f45e48ba2d3e7fb5b7abb8ad046cfcdbb1c0e346acf258ffb80ab93a15496df1f6108b4f11e0066053bc91af3b604e65a2a02a7461b929ed2ede4938778118c4f9dbf7250000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007f6c5612eb579788478789deccb06cf0eb168e457eea490af754922939ebdb920706798455f90ed993f8dac8075fc1538738a25f0c928da905c0dffd81869fa0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001c2fbd969dddf9697c13e25c8f5f4ae9b9cb1b7e07bf216efef7542a075551e8298aaaf514ea84e8553e864f01f74515461250c91f6e55d4164d78196a62ea0800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000001a068796472612d73332e310000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001c000000000000000000000000000000000000000000000000000000000000004a000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000100100000000000000000000000000007203022200000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002c0235ddbd6c55b2e3dacff02032943c9f9d7a511d959ff7726f7f882020c0d6eee0f17f36ea05c31167c5d627bf0b831101b1124df0ba41c9e7367cc2a669817f31220bf2d0970a0c3747519741832d69f38519b2ed6aaebec175c5273414f95162a057b381477078ba5db3ba8eba579e03e9573b32085b3e8886b396ab09de49d08af8c5f5ba620f43164143ddf0eff5036be8924cc03db29c51719b1005bb2640087ba183828f7cd3df0c708b3d44061f7e06967f716bce166bda72d899940e42c10a437c942970fc61ef82802bf2324e344f835a4fb364f490437a58016cb861365903dfc32f339fc3eea5b00bd7adaf93842e4b20b700153f5e1741becf38c0000000000000000000000001001000000000000000000000000000072030222000000000000000000000000000000000000000000000000000000000000000007f6c5612eb579788478789deccb06cf0eb168e457eea490af754922939ebdb920706798455f90ed993f8dac8075fc1538738a25f0c928da905c0dffd81869fa0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001c2fbd969dddf9697c13e25c8f5f4ae9b9cb1b7e07bf216efef7542a075551e8298aaaf514ea84e8553e864f01f74515461250c91f6e55d4164d78196a62ea0800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000c068796472612d73332e310000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001e000000000000000000000000000000000000000000000000000000000000004c00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000000fb20933ed4261d329255c10c64c53ff0000000000000000000000000000000006c617465737400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000c0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002c0134eb548c83e4c123e3ed998f6e20c562034b56fb4643f301f2c0e88cb3f6b2827c83ae15d77bccb0bebf29c2ba9cb54233653d35821adc31a697607edb57aba21c1021d4471f54c97a3ea17472b8e5b3d538188c6bea83ab1b85d5e2efd2cfb186d2cf2d7019fdbbc29d7d3f350c2a736dc5a0961a9b86ab62b58b45d06232a2baec921ad5f5fb909a17653901676d991dc523fe031d0c3c8e2cbefcdd90b0a27ae15386506bdf0b81a052adf5bc2ce7a986c1dc9e4ff8b277e758dbb65a2d212da988b50e1cb21865db3b2f175bf51124f0cdf6e463f3227abb3debc8a12a82fb8a649a0038e96c8a028c5fca9073c700df7a2476ab4f4d1ec3a9e710056660000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007f6c5612eb579788478789deccb06cf0eb168e457eea490af754922939ebdb920706798455f90ed993f8dac8075fc1538738a25f0c928da905c0dffd81869fa05ea09ac38a16cd791901bd278f1919fd5b63c116dc7c0fd5a7e86f4df0eb6170949a9cfe40f00c87d213ccb535ac82fe93efd9c94246ffce9d1d76cda5d8ad3053e20327f6a6531183fba34e8b0cd856d07c0041f72225920d71e79fef92d4b0000000000000000000000000000000000000000000000000000000000000001092b0b006e2dfc61f8c4647bdd3e861ea35deafb12d4cd29ac96341c4ffffffb00000000000000000000000000000000000000000000000000000000000000001c2fbd969dddf9697c13e25c8f5f4ae9b9cb1b7e07bf216efef7542a075551e8298aaaf514ea84e8553e864f01f74515461250c91f6e55d4164d78196a62ea08000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
      const tx = await contract.checkSismoGithub(
        responseText
      )

      // const tx = await contract.checkSismoGithub(
      //   (new hre.ethers.AbiCoder()).encode([
      //     "bytes"
      //   ],
      //     [
      //       responseText
      //     ]
      //   )
      // );

      console.log(tx)
    });
  });


});