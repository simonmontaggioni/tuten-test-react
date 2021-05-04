import { useState } from "react";
import "./LoginBox.css";

const LoginBox = (props) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const submitLogin = (event) => {
    props.handleLoginRequest(email, password, event);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login-box">
      <img
        className="logo"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEU2vbz////+/v41vLuB1tUgtbT5/f0wubjX8/NHwsHA6emv4uL3/Pzz+/vo9/ft+fnp+Pjd9PRmzMtTx8az5uVgysnL7u3J7e2P2dlz0M+j4eG56OfZ8/JMxcOc3t2E1tZq2UM/AAAPCElEQVR4nO1di9KiOgwGyk8BBQREAW/v/5bbJkUF2oJaEGfJnJmz6yrkI2luTYNlrbTSSiuttNJKK6200korrbTSSiuttNJKK630DSJAI75njfra4gjg0RG8EzL2USyMmGRoVo1hnOb5mCexMAKpVH58pdQaYv7PPQLEn8LIFdS6pY6zra1B+fy5zjH7MUXlAINr4jCyw2IYoe2kZfBjCGl+2jpA3qEaEA9H6OzqgPLF+xPEAWUh4mO8g3x0vANCJ9rnP6KowKZ7sJ0HxddAxzwidLxj8RMQuZMIyrOQICP+/2SvM5YCoeMcqmGz9HUCG1Mn3h0gMr8NC6pk/o7QS8vFQ+QSvOy3fP3Zd2J/8ZxU7Q8AIf6XMHuzaFXlzBWHh4Y2EPlf4zJQyKdByL+1PRVL9oxgY1KnhxC5T+qLnHdE2GjqsVoqROArKHc9eI/FeJIbS4GwwZi6C12MPAfK68SWAWyYlwdnd4RCU+NS61y+RMB5dkqkErwz7/k3q8/8A6H4Wlwvz/ljKnHwlAAbKQrn3+L+GaFYsuHinD/3Em6swXc3qdwfWBqE+DXPz+iCAEIyb5U7xRLsiDE6YXzzANBBiF87u8sRIrBb7KMBCT4WIwvOhhHaB/bUFkKc2SrcjgDYMM+Cs2eIXYT4NX8xCLmGVr7OxnQRMksC8U1zBSlCeykI0c2no+A9gdxxf9AYnD5CHssuBCFE2nU8aGO6EO0ofARnEoSLkSE3opdRNqYnxe3hDnHBCBk+mvtOO1caDTJ2CYXqxmIRsudPm1RCLSsFeMgHa4w/F4yQ2xilEXXupEQf7QsFwgVYGohj8o08V7pDSGL9A9hye7NMGQLAIhwQYHp1Q1v/lTNLNhaIEPeKsqNSCYW1ZKlsfor030rL4O+2NIQYabvKXAkheWHGv3m57vQQ45osToZgRK+xnnF7cyFNYQMtp1LWdb0shMj2XhlpN5EnFTkSoZqoFT/f9v7x6wgLkUqoVNRjBgRDa8J/kIXqsEfuUr6rpSxXOujdvHesrHsiz59IXg9C7H76LYS483lWCRD5jU7FU/6HWn1V1qjkAL+EkODOp7Ieg58nm+62PP/bTR39SK/0FYQgjZynErpgM4bdQtL+IfvPPYwrA3wRIdjFTFOugM/PrkX6CLkUM9wVXjRCSipf7wW9o7RxBBDSoI7skRC/gRCYLBON87ahUqis5PLP1Uv4+wg54xeUgdoLxvVFvfsHquqi818gQiyJJnoVPfMdFXVLAmCvjiPLjjMj5KZDyxv/3K+GOvDupWOFpn9NhvDwXV/vsp1jNrw/jfGNWhW+hBB3JVLVAkJ2o/2o7jtMNtRpybcQUuukjLTFJv21t6OkuhjfhvOHCqwzIsRtl1DNEXY9sWzeGoUQi8j50fMWglDYP6WJB8FufSzujtwMey4jq1AKhNPvr8GyuekTWDt6ecMWfCtfjEqbyjeoLjP0K/BQK9ewgqlE/XL7K4RwojNMKURvhp1ubHBK9Kkrbsy/fm2m/Bp7AyHSoZpWUbHmG6qjLLAx59ubjfZgwNQpI0A8cwM2GUJIgcRjVmqo092wfuX6LJneRCox3hWEdlMxUwQMlKm+Yh1pmypH3IElG3qIW3aHaU5jEGyi1CqRk/Au9fefMPsdJa6y5tMEg8UkJpVfU3RXyPDB7b24tOhH98b4RlPcgM8PgwH9u3cO1TUHMAO+gQY7LG7gk1RmnanxNjcwou5ZCRAXCO5KmLhXrk6sm50NsxCFBdBG2o65RlcojuxshVNCLkQb1ec3EzfkNmagRJ1cL6asOI9viKsucIkiekENPVGQYHFSAkRGsMfVwN2aW5JswPnbLLg3JEaib6KEf/AzahAgPtV8o7bc8A+70kR8Q7D8rteY7TFTHyx4+7YUkw3dZkH98ckoOMoZqG0MZBjOblNQ7Rmft+5s3XvHBjo3Pln8RDRq628TXy+mlnzn7tTSLA+EGH7k/EFVmq1Mld2201u/idkI4c7GQHMHRBnvHnAjsCtx4OUTtQCZRZsu7+Y6lO+3A7H+9d1AijRnPrVuPrxMmK5BJI5mQLN5570Z36AxE5ValYqKXYkJsAkmYDFqdjZQU0+FbutAfXWaa5ooEeD05zywsndQFjcQ4uvJBhjRbKA9i3dXmHYScmZoftQ8a/5f2t9lHrgm7EoMGuqODTXp8Z+uhvGN3vnzZOOFMFWUKwaUvy6eIRl2GM+XI4IfpRRFt8d4rwwdXBo3jxfkFUMFS2YQtoTIF+MAREw2xl37ca5crRSts6uigG8yt7DaBTvIbw6OfrMLXfMQE8BrpqwYOiKQaC9BcJ0uk6ophNZfhUF1S1OHbDu3N6M2LJmNGYgiwqwlMajIX9PQJMKbCKqfGSOi1KdUVDyzMYgwUBcsRTa/yXvLhD9eowhduzd4AXZlz3r7FynOpD6x2qQSSmV3ktasAFyCfN16hhGyddUp3T3FN8oVtBVnUqWsoJs/KTu4HDHv4Tl8EGaOdyyYR+iknbPecK9wi05exaGmpMkXc+XrjWhXdcCzYGPiBAjZgghoS09FvqpNd2LljAKeK4lcUFmKDSGbf9ZRaomu7SkQsqC603AEnZDKTjFkPqoDqWfkRQN1kxkuwc5P0YSLhzIJQqiokU7wRF3NuTH4h7CQhZDsh8rDIHi39Npzw5boWJgMIT8bG3RuyhaTemcD7c0+kPQ0EJqpOoDE03S7AJ/qKFMgbI5fXFtJKBg3Xf3WxrROgpCQKpZqaWNjaCvKaNfCpkEoFkd7T1LYG8VOKoiwDuTrkJCbrAaLdzkVXcNNLvXOnhghotiGnS0RAoGJNLtzml1ayVX5Ja49iI6wMXn3FiyOeco/pkL4SOJbNpU82up63HrKjlaM/CLJb+xdp1wBRrTVmDgZwmYx3khPh7J+5wZjwz7osqj7yZendWvjroTVdhO0ag/0mBAh9iBHncFfkBafOorKo7E00xTH4ME893MJN1CQrhsMyo5LmhQh3AnPXj5BxBPVXW4TV1v945eoHj4D/gDrtuVAZZX+KRHea7MVbbPR3tlAgK2wWYGRlwvs+28kY8cIufa80bQIhb0L272J5GFvmu/wXpCBWgP4jN09oJCO2iJk0zPTEyNE/nvdl7CsxM6G0LfhUgrE0s1mjHOQpSKI0J4XIf97v7/0ubgBA9JGsAA2SkTTnmg+WC5C3Hy4ol13DtlQCePxGxhxqBrD+R2EitMIIAHcQNL6ifZvLFoc+apV7HcsSYZNM5Pv2bvb6F0izE+kE6rEvy8JITKchUlJxlWExS+sKrNUW1aLQ8gZzm/yxF5BhKgLVgtF+PJ8bA3ABSK03kGoiQwWiNAyum2yLG8xCS1RhmZpRWiAVoQT04rQAP2XCFdvYZJWhAZoRTgxrQgN0IpwYlr9oQH6L2W4IjRJK0IDtCKcmFZvYYD+SxmuCE3SitAA/ZcI57WldW8sF2+EMHreQoJwvneUyBGaleHN9np3cGZ7zwxDuJ1ahqUM4XE+hLylqKtD22NuDiG9SixNt+trOiKkTPoIvcOIjqvRd5DNZPdO8yG8xT2EtudnxhBSay9BuK3nQwjti10hnke9j3oU0ctRYkuj62wI8dxCl4H4ZgohoUUqkWFi7AbDHOQHiQzZIzbFwF8leXOAvTOnJENEg7A/idNxTqZOcxNa2pKoKS1me3keIScZwmNuZpkwSe17CHkDbT4jwlriEJ20MsMBW4ZniQgdPoNjJkJ30fdX1xcbr1SXp7dIFvjWBoOmQRYkxpT9PTTzundi1f2Ju44T3WZ8zzoJjhIWbK6mHzOBJ+8lDzCZz5Typ7yRIHTsjQEemBqUUf8YLMss5jOlHKGbyEJj//OplDgDVpJYePIjdxMRIbks6HCi8mM1ZU/IlZkxdm2T/ZWDRK1QhtD2P3eJNDj1sk9+7XM284sRXMmxGUblh2oKR3ZkIty2D65PTzToHlQUKzH7SE+5IZVF9Y6zmy/sRqI0lDLinT551Fz+tWycAFhSg+yPYYVmiUyZnKh+taW8fVm3P5YDzu9cZ7UznJitkQiRcRO/O84bn5ukemAy5n2FGeJKLQLTp0pzkmHgmvJoxvG8zZzOsGEnlyaJ/ekg46/YPqL7fM3YRDz4Mj9WKZlkAxDFwKZXWMLRMUfpLGbHs/ezr0I4cpIfJWYPFPXcHeU2fDFyn+PdX4TObvZVCFwx3ywbRwQf4eHakSYHj/Q0Uyhll6tneK+FjC+Kh/clzxymTJBxqgpforQ1oaF9Nf0MgQmJYCLcZQl9hu2k13Hmj4gZIrYMH1wuGX900jQp9BSlaG8PbqA9IWY1B7IC9xjZ8te38RhiP1/1osceDTbS6WIO0u54ywJyH9nRGvkg/kdJUJShGMUsv87I88vTEHPRivemCJYTv3YLBrI/7ZvAh0Hh1n7iKTQUPo3dGcszPeIHhmPF+kGhOFHs78uqCCz690cb+mN/ti5FVW78OHJsuQBFnHv9IM41gZDQcmAYNosAooShdKusyPPLJcjzvMgqt9z7SdSMQ1D+mk98+qIIAaN1VQ8zvIPkgYm3jVP/wMhP4wgqMRp4jY6ezG1KvgtQ+9rbO4guFMXHPYDHlw5oT4WQ6N4M0UXTI8WPMMA9KgY+zQzSIroX7LxH3EbxQR5fc/UthPpXHr+LcHBS54yEs35UTvtNeM2Y1CUAbGb9pEq39g5CO+nPNvoiQfSVqV8f/7oA7dTAi5VMEsHFmCrnw76Gj88RNDskwQCBRlVh9JGqit96/lSvzPiM+Pw0lua98LZ0OUIv3vPk+ZvhtoJAU61ik6rn2I4QoBeHnRGJCyPmN6qN772sq5hf2E4c3vKhrPmbhGN7gqoGjONeKH5XTl742POqwIIFCMSXI82vx4Szrn4PVkc32Z+2fs3101rgAuwQZ5DZnKo+Js5T1K1EB9oZnU+3C53s9ZumSdQHL9X1lEbeY+bfA9ATsbQxPW5uhTAvPwFQVLA5yCC7XfeHOIq2XhsZNBh522jnn+pblVuUitFbv4HwMUeLQLGpKq+b05Fl9km0BYqSXXw+hJu6dLOL9QdlCvILK7BLomJI6R+xLnlWubdS0A2KNlCDwxT357A9CMUjlLZFj5lwPwxP0NMkbtKZHff74FZaaaWVVlrpF+gfE67LyXLM7fcAAAAASUVORK5CYII="
        alt="Logo Tuten"
      />
      <h2 className="login-title">member login</h2>
      <form className="login-form" action="" onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label className="input-label" htmlFor="email">
            Email
          </label>
          <input
            className="input-field"
            type="email"
            name="email"
            id="email"
            placeholder="example@example.com"
            onChange={handleEmailChange}
          />
        </div>
        <div className="input-wrapper">
          <label className="input-label" htmlFor="password">
            Password
          </label>
          <input
            className="input-field"
            type="password"
            name="password"
            id="password"
            placeholder="Insert your password"
            onChange={handlePasswordChange}
          />
        </div>
        <button className="login-button" onClick={submitLogin}>
          Login
        </button>
      </form>
      <footer className="login-footer">All right reserved</footer>
    </div>
  );
};

export default LoginBox;
