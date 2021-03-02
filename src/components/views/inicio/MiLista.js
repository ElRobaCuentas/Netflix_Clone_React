import React from 'react'
import './styles/main-listas.css'

const MiLista = (props) => {

    const name_lista = props.carrusel;
    return (
        <>
            <h1>{name_lista}</h1>
            <div className="wrapper">
                <section id="section1">
                    {/* <a href="#section2" className="izquierda">›</a> */}
                    <div className="item">
                        <img src="https://occ-0-1567-1123.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABRvngexxF8H1-OzRWFSj6ddD-aB93tTBP9kMNz3cIVfuIfLEP1E_0saiNAwOtrM6xSOXvoiSCMsihWSkW0dq808-R7_lBnr6WHbjkKBX6I3sD0uCcS8kSPbRjEDdG8CeeVXEAEV6spQ.webp" alt="Describe Image" />
                    </div>
                    <div className="item">
                        <img src="https://occ-0-243-299.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABZEK-7pZ1H5FD4cTyUb9qB_KeyJGz5p-kfPhCFv4GU_3mbdm8Xfsy4IBchlG9PFNdGff8cBNPaeMra72VFnot41nt0y3e8RLgaVwwh3UvyM2H2_MkmadWbQUeGuf811K7-cxJJh7gA.jpg" alt="Describe Image" />
                    </div>
                    <div className="item">
                        <img src="https://occ-0-243-299.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABQCoK53qihwVPLRxPEDX98nyYpGbxgi5cc0ZOM4iHQu7KQvtgNyaNM5PsgI0vy5g3rLPZdjGCFr1EggrCPXpL77p2H08jV0tNEmIfs_e8KUfvBJ6Ay5nM4UM1dl-58xA6t1swmautOM.webp" alt="Describe Image" />
                    </div>
                    <div className="item">
                        <img src="https://occ-0-243-299.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABdYtAqj8CyaJTWq5taD8Ro_UgwH3nne9QpFGVps-2J3IG-leqrfqXFii4jzZn48nPYTkrlwKQEV0R7_cEKlYBPRzdKqNODc-Oz26IL3LlLgFboXibIWXwxzeYxzuqn0I9TpARjeByw.jpg" alt="Describe Image" />
                    </div>
                    <div className="item">
                        <img src="https://occ-0-243-299.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABbcCX42tsqGbBvO2y9CQv5-7QvYbCfoHtXsuc6NPCtZaKa4l4fBX3XWvUwG9F2A3CTsNpHVmulxBbdXKwK8Q6xGjejd9FoadGkZ7CnGrSl601TOQjzSHJ23NuIPC8j0QMGORL4uRIA.jpg" alt="Describe Image" />
                    </div>
                    <a href="#section2" className="derecha">›</a>
                </section>
                
                <section id="section2">
                    <a href="#section1" className="izquierda">‹</a>
                    <div className="item">
                        <img src="https://occ-0-243-299.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABVopDZ5Fy9_fk_HO5WxHTXKKjKhtWFupbSjuvPwfLK_vytzon4EwRUdGgYJ34JwPxOTK_NkV3aXfkULMB0Dcct-FyfqzH-X44VXuRMp4QeBHlvKwWeZFpZlGdItPzmmg4scmwhG7SQ.jpg" alt="Describe Image" />
                    </div>
                    <div className="item">
                        <img src="https://occ-0-243-299.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABTOj1-116yVcgKWMU2dI3GFR4x0fSkiGsqtLLeLUxRR7STaksjAqBTrYlTfrB8nIGnGvXksi0ewXAhVGg6-pLxpFOIfcpjK-pf8D5xehFZo5a6vJbo4L0AGbrzglbyUoq255QBJgRQ.jpg" alt="Describe Image" />
                    </div>
                    <div className="item">
                        <img src="https://occ-0-243-299.1.nflxso.net/dnm/api/v5/rendition/a76057bcfd003711a76fb3985b1f2cf74beee3b8/AAAABd3IBDpxbRcHXvRMFCZeKa2aHLU1P4SJtrACMS9om3yhLjqPlvNlmR_fypPxjtbsbnKaC4JZhPSpDG4r_kdxSHHAltWguMcCB-1Y1OShr2zWfUv7Whf_39fNH5ZJ3_0gxQrs0akmQjQz44_LT7jXH5LMZ7iMBAzac5IEj4m7Fn_5OWEGYnVsDsKG-QTommDooULMDF9bEw.jpg" alt="Describe Image" />
                    </div>
                    <div className="item">
                        <img src="https://occ-0-243-299.1.nflxso.net/dnm/api/v5/rendition/a76057bcfd003711a76fb3985b1f2cf74beee3b8/AAAABXSd7bhDddcwkq9XpksoQFCHVx29Sxl_h4hb2n3F2GIt32a4XWcOnctQfgnT5qdolv8UML6_xNB5CJ89h56wueb13mYmEBr0sx5e9iLPdtVcOQAOmKXKWHHXwFvJuCUwuNnL3s8eAQwqLXPVMHMEsujM684rUGrZNF2btN2GRy5-RyEslsxZO93V2Q_H2bWs8A8oayt1h5M.webp" alt="Describe Image" />
                    </div>
                    <div className="item">
                        <img src="https://occ-0-243-299.1.nflxso.net/dnm/api/v5/rendition/a76057bcfd003711a76fb3985b1f2cf74beee3b8/AAAABbXWODpAWqVXcmmjMA7K-2mPkQpvwCLfSdeyhVXzR8A3MSpdSEnnjf4HEJJTYC-TnktU6njTUGAxmzWEYCaJbk4v_ZeL-7QGzmkvYBjg_N-evr2XmcX-Fanoyvu_nimFP4iigPe4O3Vr_WcgplhwkDrJwPUJa84wRLrNAx3TufN5V7cWRP4indqu5HQahvgFEqfL9zjp4g.jpg" alt="Describe Image" />
                    </div>
                    <a href="#section3" className="derecha">›</a>
                </section>
                
                <section id="section3">
                    <a href="#section2" className="izquierda">‹</a>
                    <div className="item">
                        <img src="https://occ-0-243-299.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABRr4YxdaABuAuH_3FmSQZn7BCvLp-UUPsXE9MiYpvFP3CSUHV2zOew5oVqKqqdaOd3tbFVS0Uf67uIs7_eZydlCghg4nK0nMatRpPImABwTOhnNzCLCxdKrua7pPIcPCZqBYTeAO5g.jpg" alt="Describe Image" />
                    </div>
                    <div className="item">
                        <img src="https://occ-0-243-299.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABTyWK1MKaw8GcObtz47R2Tj7wkLJ7qQu9tk6TVpcoyxpzD4B-zZ569bQ5vGrREBL-MWFkGilXUwy7tCDaj2XOGkUB4RsbbFAmp9NgSr6lygMpUGNHSlyfrFbUORsRkrxSIoh_ggOvg.jpg" alt="Describe Image" />
                    </div>
                    <div className="item">
                        <img src="https://occ-0-243-299.1.nflxso.net/dnm/api/v5/rendition/a76057bcfd003711a76fb3985b1f2cf74beee3b8/AAAABY7NwkWEJIfXsn6t3Li4bGSCQ1nEErPisI5ZZtXlC-_VRBZOUrhWK5X3vt3t6SR_cpgVhCwxgQqFFDJhk62Kk8hawOnYGZMr0LKeLczMFV2zalCFjkcdLksvT4HB2LEi6LFyruyk3Uu0LmNGsHfC2A8Bly60smr_3sDbz4RruXcklPOG1qYq9wUVu3zfaiwNvqmG4b8aFA.jpg" alt="Describe Image" />
                    </div>
                    <div className="item">
                        <img src="https://occ-0-243-299.1.nflxso.net/dnm/api/v5/rendition/a76057bcfd003711a76fb3985b1f2cf74beee3b8/AAAABemXHOga9feFnOux6I2YyACBD94wvM7N3vcTGIfMpQ_BcaXeoeM9XyzdVdamKtxt0SHXZfvsl6czcp3E48tXMLtHBxuQsh1BjHtPGgJDZ81je_FjItINiqzLtir0A30s_e4KR8G3d7AYAPDjZVOY97bNpzNqtkcHcGp7fGnJByVCps1uLfG9U9tK3Ma1A_3JbRt0NiT2_Q.jpg" alt="Describe Image" />
                    </div>
                    <div className="item">
                        <img src="https://occ-0-243-299.1.nflxso.net/dnm/api/v5/rendition/a76057bcfd003711a76fb3985b1f2cf74beee3b8/AAAABVxuRB932hvre-XP0gh6ar5ztoR3Oe3QjKHkyvcDnRak2MKXOrx5H7mFQSvggefMFOppwEs7ZCCpiqrJ_CYGvtvYB9NpU4SWUtNO6uV2u-DTID267AcHjHcGvGBQJ1ufddDkxcGOZyi5MlOQ5QUmBun4652FbYUnib3zMYQDgcna_Pvz8y_HO5fbokxezrRR1JZAAiqFSQ.jpg" alt="Describe Image" />
                    </div>
                    {/* <a href="#section1" className=" derecha">›</a> */}
                </section>
            </div>
        </>
    )
}

export default MiLista;







{/* <div className="modal">
                <img src="https://occ-0-2645-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWKZ09Rc0XJajYGD8tjSCBrBt765O6U5mouCyI3ztWUnVgMQiKvCZsC3DEakg_ArUIlscAapIeBPRx1_SSFRfIP6yZ4taN7eprJhsqodShvEGMlyCPPwGbmgs1CF.jpg?r=da1" className="modal__img"/>
                <div className="modal_boton">X</div>    
            </div> */}
{/* <div className="lista">
                <div className="replic_lista">
                    <div className="mi_lista">
                        <a href="">Mi lista</a>
                    </div>
                    <div className="pelis_lista">
                        <a href="">
                            <img src="https://occ-0-2645-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWKZ09Rc0XJajYGD8tjSCBrBt765O6U5mouCyI3ztWUnVgMQiKvCZsC3DEakg_ArUIlscAapIeBPRx1_SSFRfIP6yZ4taN7eprJhsqodShvEGMlyCPPwGbmgs1CF.jpg?r=da1" alt=""/>
                        </a>
                        <a href="">
                            <img src="https://occ-0-2645-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcRostPv6tJWGRQ8kkR7o3aAx0aFJUri8ibmebSJ6mKklIf9_WQzmicOuSJttdjvJf5tNnVd9Os3vxSRxa1YO4ZfN3_7m1NZbwGuCXwvhofjcNTnSq4QJqJ4PQamXtfwE64P6jSzkdVocnxtAloYD6n4Ew_SCA.jpg?r=8ae" alt=""/>
                        </a>
                        <a href="">
                            <img src="https://occ-0-2645-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfl1k53jLET3pG3LQCHZyRtSB8TO3IkvelVUT0bYNKUlIS03S891OBiuzSu4cUFdBWOFFaCKmf3w-KBpDjn6Q6JtgBfNpveWhHqPZnkvmN_u88AekfsctLHLrEQu.jpg?r=4e9" alt=""/>
                        </a>
                        <a href="">
                            <img src="https://occ-0-2645-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZWMmoF5gZO9ty664r0noYsJIRUwq-HiecEhaUFPyIsHTWgbPkhzBRlWpbLSsbn8Faf3lOswlWGwMlkTt3r-nQnQkNb6ciM4eVYaCaqI1bBP5bU4mWT6v_drIi1L.jpg?r=685" alt=""/>
                        </a>
                        <a href="">
                            <img src="https://occ-0-2645-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTsCglf4vYoZpyx-DWzSxwgZ7B9CvSOJYFZFbfkMlWGKzIEvjb41Qmko00Ras39y4ymztYtr1SaT4lT-7mb8JbdHbePXUo_62gelXExJNGCl13YHnS0qCHBX2oto.jpg?r=5fb" alt=""/>
                        </a>
                        <a href="">
                            <img src="https://occ-0-2645-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU-861hCn4hkMCk3lWNrFJK8GxkHQHw5gaOHNt7Jo_oGHT9Ad2GmiEP829joOjlNcBQDoRbhiQX8dChKRVGD-vpHTt0YeaYQKIVTgyLmpomwZ_7TCir2Y-KZjFKP.jpg?r=317" alt=""/>
                        </a>
                    </div>
                </div>
            </div> */}

