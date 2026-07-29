export const authCheck = async (req, res) => {
  res.json({ message: "Auth route" });
};

export const login = async (req, res) => {
  res.json({ message: "Login route" });
};

export const register = async (req, res) => {
  res.json({ message: "Register route" });
};
