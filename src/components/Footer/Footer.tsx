const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col items-center justify-center
                      gap-16 text-white p-2 mt-32 ml-2">
        <div className="flex flex-wrap gap-24 text-lg">
          <div className="flex flex-col">
            <span className="font-bold">COMPANY</span>
            <span>About</span>
            <span>Help</span>
            <span>Careers</span>
          </div>

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

        <div className="flex flex-col text-center text-sm">
          <span>Copyright © 2024 Blendify</span>
          <span>All rights reserved</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
