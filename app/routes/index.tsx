import { Link } from "@remix-run/react";
import styled from "styled-components";
import { useOptionalUser } from "~/utils";

export default function Index() {
  const user = useOptionalUser();
  return (
    <Wrapper id="root">
      <div>
        <div>
          <div>
            <div></div>
            <div>
              <div>
                {user ? (
                  <Link to="/notes">View Notes for {user.email}</Link>
                ) : (
                  <div>
                    <Link to="/join">Sign up</Link>
                    <Link to="/login">Log In</Link>
                  </div>
                )}
              </div>
              <a href="https://remix.run">
                <img
                  src="https://user-images.githubusercontent.com/1500684/158298926-e45dafff-3544-4b69-96d6-d3bcc33fc76a.svg"
                  alt="Remix"
                />
              </a>
            </div>
          </div>
        </div>

        <div>
          <div></div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  background-color: ${(p) => p.theme.colors.green};
`;
