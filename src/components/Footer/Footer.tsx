const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col items-center justify-center
                      gap-16 text-white text-lg m-2 mt-32">
        <div className="flex gap-32">
          <div className="flex flex-col">
            <span className="font-bold">CONTACT</span>
            <span>Twitter</span>
            <span>Discord</span>
            <span>GitHub</span>
          </div>

          <div className="flex flex-col">
            <span className="font-bold">LEGAL</span>
            <span>Terms of Use</span>
            <span>Privacy Policy</span>
          </div>
        </div>

        <div className="flex flex-col text-center">
          <span>Copyright © 2023 Blendify</span>
          <span>All rights reserved</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
