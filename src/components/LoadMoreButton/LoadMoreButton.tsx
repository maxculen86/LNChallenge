interface LoadMoreButtonProps {
  label: string;
  onClick?: () => void;
}

export function LoadMoreButton({ label, onClick }: LoadMoreButtonProps) {
  return (
    <div className="col-12 hlp-text-center hlp-margintop-40">
      <button className="--btn --secondary" onClick={onClick}>
        {label}
      </button>
    </div>
  );
}
