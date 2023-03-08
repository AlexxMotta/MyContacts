const ContactRepository = require('../repositories/ContactRepository');
// const contactRepository = ContactRepository

class ContactController {
  async index(request, response) {
    const { orderBy } = request.query;
    // Lista todos os registros
    // const contacts = await ContactRepository.findAll(orderBy);
    response.json(contacts);
  }

  async show(request, response) {
    // Lista um unico
    const { id } = request.params;
    const contacts = await ContactRepository.findById(id);
    if (!contacts) {
      return response.status(404).json({ message: 'User not found' });
    }
    return response.json(contacts);
  }

  async store(request, response) {
    // Adiciona um novo registro
    const {
      name, email, phone, categoryId,
    } = request.body;
    const existisEmail = await ContactRepository.findByEmail(email);
    if (existisEmail) {
      return response.status(401).json({ message: 'This email is in use.' });
    }

    const contact = await ContactRepository.create(name, email, phone, categoryId);
    return response.status(200).json({ contact });
  }

  async update(request, response) {
    const {
      name, phone, email, categoryId,
    } = request.body;
    const { id } = request.params;
    const existingContactById = ContactRepository.findById(id);
    const existingContactByEmail = await ContactRepository.findByEmail(email);
    if (!existingContactById) {
      return response.status(404).json({ message: 'User not found' });
    }
    if (existingContactByEmail && existingContactById.id === id) {
      return response.status(404).json({ message: 'This email is in use' });
    }

    const contactData = await ContactRepository.update(id, name, phone, email, categoryId);
    return response.status(200).json({
      contactData,
    });
  }

  async delete(request, response) {
    const { id } = request.params;
    const deletedContact = await ContactRepository.delete(id);
    return response.status(204).json({ deletedContact });
  }
}

// Singleton
module.exports = new ContactController();
