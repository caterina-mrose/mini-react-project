import { useRef, type ChangeEvent, type SubmitEvent } from "react";
import { useForm } from "react-hook-form";

export function Form() {
  const { register } = useForm();

  const passwordRef = useRef<HTMLInputElement>(null);
  const onEmailChange = (event: ChangeEvent) => {
    console.log((event.target as HTMLInputElement).value);
  };
  const onSubmit = (event: SubmitEvent) => {
    event.preventDefault();
    console.log(passwordRef.current?.value);
  };
  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input
          onChange={(event) => onEmailChange(event)}
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
        <small id="emailHelp" className="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          type="password"
          ref={passwordRef}
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
        />
      </div>
      <div className="form-group form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Check me out
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
