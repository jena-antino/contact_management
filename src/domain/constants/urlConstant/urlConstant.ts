const urlConstant = {
  user: {
    createUser: "/create-user",
  },
  contact: {
    create_contact: "/create_contact",
    delete_contact: "/delete_contact/:id",
    bulk_delete_contact: "/bulk_delete_contact",
    update_contact: "/update_contact/:id",
    find_contact: "/find_contact/:query",
    all_contact: "/all_contact",
    filter_contact: "/filter_contact",
    count_category: "/count_category",
  },
};
export default urlConstant;
