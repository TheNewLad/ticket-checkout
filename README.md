# **Ticket Checkout**

## **How I worked on this project**

- I used a prompt given by a take-home assessment and followed the directions given by it: [Screenshot of prompt](https://user-images.githubusercontent.com/22102599/232319188-9ac34d32-f793-43dd-b794-a7f23dfe91f5.png)
- I used feature branches and made PR requests on master: [Example PR](https://github.com/devkdn/ticket-checkout/pull/5)
- I planned out my design using the criteria in the design prompt. I followed the written acceptance criteria and took inspiration from the visual reference provided.

## **How to navigate this project**

- Everything sits under `src/` and one file under `src/hooks` when writing this.
- `App` is the main component which is used to manage the users progress towards checkout. It renders the main layout, the navigation buttons, and the component linked to the current step.
- `ShowSelector` is the first component rendered. It used the `shows` file as its datasource to render the `Show`s with the title, image, price, and date.
- `TicketQuantitySelector` is the second component rendered. It is used to display the show selected and its details and allow the user to select the number of tickets wanted for purchase.
- `Checkout` is the final component rendered. This is the meat and potatoes of the app. It is used to display the final ticket price before purchase and two forms to get billing address and payment information. It keeps track of the error state of the two forms.
  - `BillingAddressForm` and `PaymentForm` use a custom react hook `useFormInput` to track the state of the form in a manageable way.

## **Why I built it this way**

- I decided to build the app using MUI since it would let me focus more on the functional part of the app.
- For this app I kept it pretty simple and used `useState` for the state management. I know there are more robust methods for state management like Redux, but it’s not the strongest tool in my toolbox so I was reluctant to reach for it or something else in this timed sensitive project.

## **If I had more time I would change this**

- Design this app using TDD. But I’ve noticed that it takes me twice as long writing the tests as it does implementing the feature and since this was a timed assessment, I went right to implementing.
- Add tests. I love working with React Testing Library as it allows me to have a lot of confidence in the component and its features are working as expected.
- Use React Router to navigate the checkout process. This would have simplified the user flow management allowing me to use routes to point to the next steps instead of `steps`. Also it would have allowed to break up the checkout process into sub steps using the current step functionality and use routes for the overall progress.
- Setup ESLint to manage the look of the code and ensure that everything in the app is following the same standard to minimize errors.
- Setup CI to run tests and ensure the app is working as intended. I would also add a coverage check so at the bare minimum the code that is introduced has tests associated with it.
- Take more liberties with the look of the app. In the sake of time I just used MUI right out of the box and didn’t spend much time on UI/UX since I didn’t have a design doc to follow and I didn’t want to get hung up on how it looked if it didn’t work.
- Organize the app files in a more meaningful way. Currently, the app is very flat since I didn’t want to spend my time bike-shedding over the file organization, which wouldn’t allow me to get to MVP. The app is simple enough that flat works.
- Improve form look and use better form validation. I added some very quick validations, but I really wanted to make the form like a real world app. These are the validations I would have liked to implement:
  - Credit card validation. I want to support non 16 digit cards and use an API like Stripe to verify the validity of the card.
  - Date validator for the expiration date with formatting — `MM/YY`
- Use a more robust datastore to manage the shows in the app like Firebase.
- Use third party APIs and tools to abstract the business logic or functionality that is not related to the core purpose of the app itself.
  - Google Maps to help input the address.
  - Stripe for card verification, validation, and processing.
  - Formik, React Hook Forms, Yup, etc. to manage form state and validation.

## **How to use**

### **Netlify**

[https://melodic-alfajores-05deb6.netlify.app/](https://melodic-alfajores-05deb6.netlify.app/)

### Local

Download or clone the repo

Change to the directory

```sh
cd ticketing-system

```

Install it and run:

```sh
npm install
npm start

```

## **Built using:**

- React
- MUI
