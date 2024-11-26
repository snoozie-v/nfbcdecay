const currentYear = new Date().getFullYear()

console.log(currentYear)

const data = [
    {
        contract: "0xaA7EE381AD00cb3d5BB104525541eEc8CCd71cA8",
        title:"Book of Dragons",
        creation: "11/25/2024",
        tier1_final: "12/22/2024", 
        tier2_start: "12/23/2024", 
        tier2_final: "1/5/2025", 
        claiming_expire: "1/6/2025"
    },
    {
        contract: "0xbeB61c9d0d3bB2A63CB36252E3497d09aEBBB172",
        title:"Death of the Lion",
        creation: "11/25/2024",
        tier1_final: "12/22/2024", 
        tier2_start: "12/23/2024", 
        tier2_final: "1/5/2025", 
        claiming_expire: "1/6/2025"
    },
    {
        contract: "0x6407783aF143F978809CdA0B91059DfD5d7714dA",
        title:"The Blind Brother",
        creation: "11/15/2024",
        tier1_final: "12/15/2024", 
        tier2_start: "12/16/2024", 
        tier2_final: "12/29/2024", 
        claiming_expire: "12/30/2024"
    },
    {
        contract: "0xC33c03D773453076DEaCB25634384199Ac200eBA",
        title:"The Green Odyssey",
        creation: "11/15/2024",
        tier1_final: "12/15/2024", 
        tier2_start: "12/16/2024", 
        tier2_final: "12/29/2024", 
        claiming_expire: "12/30/2024"
    },
    {   
        contract: "0x9470a8E957EACA3538Fc0567A25BAb1770DF69F6", 
        title: "The Awakening", 
        creation: "11/8/2024",
        tier1_final: "12/8/2024", 
        tier2_start: "12/9/2024", 
        tier2_final: "12/22/2024", 
        claiming_expire: "12/23/2024"
    },
    {
        contract: "0xD6e4dDa5954bbc11486cc5BD4b8c8f0F674F788C",
        title:"The Iliad of Homer",
        creation: "11/8/2024",
        tier1_final: "12/8/2024", 
        tier2_start: "12/9/2024", 
        tier2_final: "12/22/2024", 
        claiming_expire: "12/23/2024"
    },
    {
        contract: "0x55E0622d16260Bb94d1D6b5f45e0D8A8f8A6f250",
        title:"Think and Grow Rich",
        creation: "11/8/2024",
        tier1_final: "12/8/2024", 
        tier2_start: "12/9/2024", 
        tier2_final: "12/22/2024", 
        claiming_expire: "12/23/2024"
    },
    {
        contract: "0xE7C70207D8fA494b8AFeBA3792FeF462BA001A37",
        title:"The Jungle",
        creation: "11/8/2024",
        tier1_final: "12/8/2024", 
        tier2_start: "12/9/2024", 
        tier2_final: "12/22/2024", 
        claiming_expire: "12/23/2024"
    },
    {
        contract: "0x05f764D670Ea95B536E01bF2e3C48d84242C0EE6",
        title:"The Echanted Castle",
        creation: "10/21/2024",
        tier1_final: "11/24/2024", 
        tier2_start: "11/25/2024", 
        tier2_final: "12/8/2024", 
        claiming_expire: "12/9/2024"
    },
    {
        contract: "0xbbc2A43dab2Bc8a071c970A12F0BF3223467f61c",
        title:"Thus Spoke Zarathustra",
        creation: "10/21/2024",
        tier1_final: "11/24/2024", 
        tier2_start: "11/25/2024", 
        tier2_final: "12/8/2024", 
        claiming_expire: "12/9/2024"
    },
    {
        contract: "0x5277cC5C485c40BB08107689199C8c4f0c8414b2",
        title:"Jane Eyre",
        creation: "10/21/2024",
        tier1_final: "11/24/2024", 
        tier2_start: "11/25/2024", 
        tier2_final: "12/8/2024", 
        claiming_expire: "12/9/2024"
    },
    {
        contract: "0x5FfB5957591C850f0c156c67c121A8092a1ffE12",
        title:"Robinson Crusoe",
        creation: "10/21/2024",
        tier1_final: "11/24/2024", 
        tier2_start: "11/25/2024", 
        tier2_final: "12/8/2024", 
        claiming_expire: "12/9/2024"
    },
    {
        contract: "0xD8FE8ceBC768598BEa51aE27FEA935024002fd60",
        title:"The Last Trail",
        creation: "10/13/2024",
        tier1_final: "11/10/2024", 
        tier2_start: "11/11/2024", 
        tier2_final: "11/24/2024", 
        claiming_expire: "11/25/2024"
    },
    {
        contract: "0xc46727319E82e26E68BB5BeFC589f80765c39b37",
        title:"The Marvelous Land of Oz",
        creation: "10/13/2024",
        tier1_final: "11/10/2024", 
        tier2_start: "11/11/2024", 
        tier2_final: "11/24/2024", 
        claiming_expire: "11/25/2024"
    },
    {
        contract: "0x8cF80c884DFe0A3334fF9e246aE28021a51C2fB2",
        title:"The Wealth of Nations",
        creation: "10/13/2024",
        tier1_final: "11/10/2024", 
        tier2_start: "11/11/2024", 
        tier2_final: "11/24/2024", 
        claiming_expire: "11/25/2024"
    },
    {
        contract: "0x36de87571941d0dC94B0fAeAF09d7D5C106164A1",
        title:"Winnie the Pooh",
        creation: "10/13/2024",
        tier1_final: "11/10/2024", 
        tier2_start: "11/11/2024", 
        tier2_final: "11/24/2024", 
        claiming_expire: "11/25/2024"
    },
    {
        contract: "0x195ef4F60cc4e842EE920d19e1E4C5dA6bec7d49",
        title:"Dr Jekyll and Mr Hyde",
        creation: "10/02/2024",
        tier1_final: "11/10/2024", 
        tier2_start: "11/11/2024", 
        tier2_final: "11/24/2024", 
        claiming_expire: "11/25/2024"
    },
    {
        contract: "0xf52518a4541240F9DD2DA80B308D0A6936752302",
        title:"Lair of the White Worm",
        creation: "10/02/2024",
        tier1_final: "11/10/2024", 
        tier2_start: "11/11/2024", 
        tier2_final: "11/24/2024", 
        claiming_expire: "11/25/2024"
    },
    {
        contract: "0x49482B33063FB692eC8Ca31063b20E751B962F1d",
        title:"The Turn of the Screw",
        creation: "10/01/2024",
        tier1_final: "11/3/2024", 
        tier2_start: "11/4/2024", 
        tier2_final: "11/17/2024", 
        claiming_expire: "11/18/2024"
    },
    {
        contract: "0xD2d8e86A24cDdE3bff3CA69998825F76d6E9d750",
        title:"Frankenstein",
        creation: "10/01/2024",
        tier1_final: "11/3/2024", 
        tier2_start: "11/4/2024", 
        tier2_final: "11/17/2024", 
        claiming_expire: "11/18/2024"
    },

]


function displayData() {
    const dataContainer = document.getElementById('data-container');
    dataContainer.innerHTML = '';
  
    data.forEach(item => {
      const itemDiv = document.createElement('div');
      itemDiv.className = 'data-item'; 
      itemDiv.innerHTML = `
        <h2><a href="https://vechainstats.com/account/${item.contract}">${item.title}</a></h2>
        <ul>
        <li><strong>Creation Date:</strong> ${item.creation}</li>
          <li><strong>Tier 1 Final Day:</strong> ${item.tier1_final}</li>
          <li><strong>Tier 2 Start Date:</strong> ${item.tier2_start}</li>
          <li><strong>Tier 2 Final Day:</strong> ${item.tier2_final}</li>
          <li><strong>Claiming Expire</strong> ${item.claiming_expire}</li>
        </ul>
      `;
  
      dataContainer.appendChild(itemDiv);
    });
  }
  
  displayData();