import Notice from "./Notice";


const Home = () => {
    const notice = "Notice Here"
    return (
        <div>
            <Notice notice={notice}></Notice>
            <div style={{ margin: 'auto', width: '80%' ,marginTop:'3rem'}}>

            <h1 style={{color:'#990099'}}>Request testnet LINK</h1>
            <p>Get testnet LINK for an account on one of the supported blockchain testnets so you can <br />create and test your own oracle and Chainlinked smart contract</p>


            </div>
        </div>
    );
};

export default Home;