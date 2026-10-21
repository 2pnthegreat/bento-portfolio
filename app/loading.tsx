const Loading = () => {
    return (
        <div className="min-h-screen w-full bg-bg-color flex items-center justify-center z-50">
            <div className="bg-card-bg p-8 rounded-2xl shadow-sm border border-border-color flex flex-col items-center gap-4">
                <div className="relative">
                    <div className="w-12 h-12 rounded-full border-4 border-border-color"></div>
                    <div className="absolute top-0 left-0 w-12 h-12 rounded-full border-4 border-accent border-t-transparent animate-spin"></div>
                </div>

                <p className="text-sm font-medium text-text-sub animate-pulse">
                    Loading...
                </p>
            </div>
        </div>
    );
};

export default Loading;
