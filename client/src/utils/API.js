export const getMe = (token) => {
  return fetch("/api/users/me", {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
};

export const createUser = (userData) => {
  return fetch("/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
};

export const loginUser = (userData) => {
  return fetch("/api/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
};

export const updateUserProfile = (userData, token) => {
  return fetch("/api/users/me", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(userData),
  });
};

export const getProjects = () => {
  return fetch("/api/projects");
};

export const getProject = (id) => {
  return fetch(`/api/projects/${id}`);
};

export const createProject = (projectData, token) => {
  return fetch("/api/projects", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(projectData),
  });
};

export const updateProject = (id, projectData, token) => {
  return fetch(`/api/projects/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(projectData),
  });
};

export const deleteProject = (id, token) => {
  return fetch(`/api/projects/${id}`, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};
