const currentYear = new Date().getFullYear()

console.log(currentYear)

const data = [
    {
        contract: "0x7819982c650D831F2ed13D9DB0e00b99e5E98606",
        title:"Nutcracker and King Mouse",
        creation: "12/10/2024",
        tier3_final: "12/29/2024",
        claiming_expire: "12/30/2024"
    },
    {
        contract: "0x87543EAD491e64BA5A358c3901c86e448Be3865e",
        title:"Christmas Comes But Once a Year",
        creation: "12/10/2024",
        tier3_final: "12/29/2024",
        claiming_expire: "12/30/2024"
    },
    {
        contract: "0x944F412D04A74B82c261f8540DB851D7A2D74ab5",
        title:"Life and Adventures of Santa Claus",
        creation: "12/10/2024",
        tier3_final: "12/29/2024",
        claiming_expire: "12/30/2024"
    },
    {
        contract: "0x138Fc079CFCD214A7afF4D38533A9574D4aDF463",
        title:"Beyond the City",
        creation: "12/6/2024",
        tier1_final: "1/5/2024",
        claiming_expire: "1/6/2025"
    },
    {
        contract: "0x6521B0e9f697c9eb8a8e33743b843bF5b8d0822c",
        title:"Four-Fifty Miles to Freedom",
        creation: "12/6/2024",
        tier1_final: "1/5/2024",
        claiming_expire: "1/6/2025"
    },
    {
        contract: "0x290d65836FF3ccBe27E68Df92aeaE770eDa34945",
        title:"Silas Marner",
        creation: "12/6/2024",
        tier3_final: "12/30/2024"
    },
    {
        contract: "0x7218D65DFDc072A7D93F07E20FA0b92Bf9A2Ef27",
        title:"The Coming People",
        creation: "11/26/2024",
        tier1_final: "12/29/2024", 
        tier2_start: "12/30/2024", 
        tier2_final: "1/12/2025", 
        claiming_expire: "1/13/2025"
    },
    {
        contract: "0xBA64a0e4586684e71dA251Ea7391E870d37b501b",
        title:"The Worm Ouroboros",
        creation: "11/26/2024",
        tier1_final: "12/29/2024", 
        tier2_start: "12/30/2024", 
        tier2_final: "1/12/2025", 
        claiming_expire: "1/13/2025"
    },
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
    }
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
    ${item.creation ? `<li><strong>Creation Date:</strong> ${item.creation}</li>` : ''}
    ${item.tier1_final ? `<li><strong>Tier 1 Final Day:</strong> ${item.tier1_final}</li>` : ''}
    ${item.tier2_start ? `<li><strong>Tier 2 Start Date:</strong> ${item.tier2_start}</li>` : ''}
    ${item.tier2_final ? `<li><strong>Tier 2 Final Day:</strong> ${item.tier2_final}</li>` : ''}
    ${item.tier3_final ? `<li><strong>Tier 3 Final Day:</strong> ${item.tier3_final}<li>` : ''}
    ${item.claiming_expire ? `<li><strong>Claiming Expire:</strong> ${item.claiming_expire}</li>` : ''}
    
  </ul>
`;
  
      dataContainer.appendChild(itemDiv);
    });
  }
  
  displayData();